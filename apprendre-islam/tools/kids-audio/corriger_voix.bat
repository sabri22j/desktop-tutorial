@echo off
chcp 65001 >nul
cd /d "%~dp0"
set PY=python
where python >nul 2>&1 || set PY=py
where %PY% >nul 2>&1 || (echo Python n'est pas installe. & pause & exit /b)
echo ==== Correction des voix du monde 1 (ElevenLabs) ====
set VOICE=eh0puYmBFqe4ZH2tzdDm
set /p ELEVENLABS_API_KEY=Colle ta cle API ElevenLabs puis appuie sur Entree : 
echo.
%PY% gen_cloud.py elevenlabs %VOICE% audio-kids-corrige --file redo-w1.txt
echo.
echo Termine. Envoie-moi le dossier audio-kids-corrige (en .zip).
pause
