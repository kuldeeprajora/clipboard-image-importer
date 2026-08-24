/*
    Clipboard Image Importer.jsx
    Dockable ScriptUI panel entrypoint.
*/

#target aftereffects

(function (thisObj) {
    var SCRIPT_NAME = "Clipboard Image Importer";
    var CORE_FILE_NAME = "ClipboardImageImporterCore.jsxinc";

    function showLoadError(message) {
        alert(SCRIPT_NAME + "\n\n" + message);
    }

    function loadCore() {
        var scriptFile;
        var coreFile;

        try {
            scriptFile = new File($.fileName);
            coreFile = new File(scriptFile.parent.fullName + "/" + CORE_FILE_NAME);
            if (!coreFile.exists) {
                showLoadError("Could not find " + CORE_FILE_NAME + " next to this panel script.\n\nExpected path:\n" + coreFile.fsName);
                return null;
            }
            $.evalFile(coreFile);
            if (!$.global.ClipboardImageImporterCore || !$.global.ClipboardImageImporterCore.buildUI) {
                showLoadError(CORE_FILE_NAME + " loaded, but did not expose the ClipboardImageImporterCore API.");
                return null;
            }
            return $.global.ClipboardImageImporterCore;
        } catch (loadError) {
            showLoadError("Could not load " + CORE_FILE_NAME + ".\n\n" + String(loadError));
        }

        return null;
    }

    var core = loadCore();
    var panel;

    if (!core) {
        return;
    }

    panel = core.buildUI(thisObj);
    if (panel instanceof Window) {
        panel.center();
        panel.show();
    }
})(this);
