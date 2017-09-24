:: after the build, move the files to /docs folder and commit. They will be published to GitHub Pages automatically.

@echo off

echo cleaning up.
:: clean up first
del /q destination\*
for /d %%x in (destination\*) do @rd /s /q "%%x"

echo press any key to deploy
pause

:: copy newly generated content
xcopy ..\build\* ..\docs\ /e

:: manual adjustment
del %destination%\favicon.ico.bak