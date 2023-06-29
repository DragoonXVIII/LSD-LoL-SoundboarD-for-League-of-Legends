import webview
import httpx
import httpcore
import time
import json

# playerName = "https://127.0.0.1:2999/liveclientdata/activeplayername"


def runRequestLoop(window):
    inGame = False
    with httpx.Client(verify=False) as client:
        while (True):
            try:
                request = client.get(
                    "https://127.0.0.1:2999/liveclientdata/eventdata")
                print(json.loads(request.text)['Events'])
                if not inGame:
                    inGame = True
                    window.evaluate_js("window.runTimer();")
            except Exception:
                if inGame:
                    inGame = False
            time.sleep(0.5)


window = webview.create_window(
    'LSD', 'webview/index.html', frameless=True)
webview.start(runRequestLoop, window)
# debug=True
