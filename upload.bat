@echo off
echo =======================================
echo    ChandaLGx — ONE-CLICK DEPLOY
echo =======================================
echo.

git init
git add .
git commit -m "Official Release: ChandaLGx Luxury Sanskrit Prosody Intelligence"
git branch -M main
git remote add origin https://github.com/InduS06/Chanda.git
git push -u origin main

echo.
echo =======================================
echo    DONE! Refresh https://github.com/InduS06/Chanda
echo =======================================
pause
