:: after the build, move the files to /docs folder and commit. They will be published to GitHub Pages automatically.

@echo off
cls 

set destination=..\docs

echo cleaning up.
:: clean up first
::del /q %destination%\*
:: delete all files except CNAME
for %%i in (%destination%\*) do if not %%i == ..\docs\CNAME del %%i
:: clean subdirectories
for /d %%x in (%destination%\*) do @rd /s /q "%%x"

echo The destination cleared. Ready to copy the new files.
pause

:: copy newly generated content
xcopy ..\build\* %destination% /e

:: manual adjustment
del %destination%\favicon.ico.bak

echo Now commit and push the files to GitHub.