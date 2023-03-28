use sysinfo::{ ProcessExt, System, SystemExt};
use regex::Regex;

fn main() {
    let mut sys = System::new();
    sys.refresh_processes();
    for process in sys.processes().iter() {
        if process.1.name() == "LeagueClient.exe" {
            let process_cmd = process.1.cmd().join(" ");
            println!("{}", &process_cmd);
            let regex = Regex::new(r"--riotclient-app-port=([0-9]*)").unwrap();
            if let Some(mat) = regex.find(&process_cmd) {
                println!("Znaleziono dopasowanie: {}", &mat.as_str()[22..]);
            } 
            }
    }
}
