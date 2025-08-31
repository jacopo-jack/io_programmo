@echo off
echo Avvio del server web Python sulla porta 8000...
echo Premi Ctrl+C per fermare il server.

REM Assicurati che Python sia nel tuo PATH o specifica il percorso completo, es: "C:\Python\Python39\python.exe"
python -m http.server 8000
pause