:: after the build, move the files to /docs folder and commit. They will be published to GitHub Pages automatically.

:: clean up first
del /q destination\*
for /d %x in (destination\*) do @rd /s /q "%x"

:: copy newly generated content
xcopy ..\build\* ..\docs\ /e