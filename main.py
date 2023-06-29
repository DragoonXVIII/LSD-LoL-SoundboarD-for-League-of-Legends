import webview
import httpx
import httpcore
import time
import json

# playerName = "https://127.0.0.1:2999/liveclientdata/activeplayername"


def runRequestLoop(window):
    inGame = False
    playerName = ""
    with httpx.Client(verify=False) as client:
        while (True):
            i += 1
            try:

                # Handle Events
                request = client.get(
                    "https://127.0.0.1:2999/liveclientdata/eventdata")
                print(json.loads(request.text)['Events'])

                # Get player name
                if not playerName:
                    request = client.get(
                        "https://127.0.0.1:2999/liveclientdata/activeplayername")
                    playerName = request.text[1:-1]

                # Set inGame variable and call matchStart()
                if not inGame:
                    inGame = True
                    window.evaluate_js("window.matchStart();")

            except Exception:

                # Reset all variables back to original values
                if inGame:
                    inGame = False
                    playerName = ""

            # Sleep for half a second
            time.sleep(0.5)


window = webview.create_window(
    'LSD', 'webview/index.html', frameless=True)
webview.start(runRequestLoop, window)
# debug=True
