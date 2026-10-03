@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ==== Voix de Sirat avec ElevenLabs ====
set VOICE=eh0puYmBFqe4ZH2tzdDm
set /p ELEVENLABS_API_KEY=Colle ta cle API ElevenLabs puis appuie sur Entree : 
echo.
echo Test : 1 seul clip pour verifier la voix...
python gen_cloud.py elevenlabs %VOICE% audio-kids --only w1a1-c0
if errorlevel 1 goto fin
echo.
echo Ecoute audio-kids\w1a1-c0.mp3. Si la voix te plait, appuie sur une touche pour generer le MONDE 1 (environ 6 000 caracteres).
pause >nul
python gen_cloud.py elevenlabs %VOICE% audio-kids --prefix w1
echo.
echo Pour generer tout le reste, tape : python gen_cloud.py elevenlabs %VOICE% audio-kids
:fin
pause
