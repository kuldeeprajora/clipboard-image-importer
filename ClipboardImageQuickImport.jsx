/*
    Clipboard Image Quick Import.jsx
    Headless shortcut entrypoint for importing the current clipboard image.
*/

#target aftereffects

(function () {
    var SCRIPT_NAME = "Clipboard Image Quick Import";
    var CORE_FILE_NAME = "ClipboardImageImporterCore.jsxinc";

    function showLoadError(message) {
        alert(SCRIPT_NAME + "\n\n" + message);
    }

    function findCoreFile() {
        var scriptFile = new File($.fileName);
        var scriptFolder = scriptFile.parent;
        var candidates = [
            new File(scriptFolder.fullName + "/" + CORE_FILE_NAME),
            new File(scriptFolder.fullName + "/ScriptUI Panels/" + CORE_FILE_NAME),
            new File(scriptFolder.parent.fullName + "/ScriptUI Panels/" + CORE_FILE_NAME)
        ];
        var i;

        for (i = 0; i < candidates.length; i += 1) {
            if (candidates[i].exists) {
                return candidates[i];
            }
        }

        return candidates[0];
    }

    function loadCore() {
        var coreFile;

        try {
            coreFile = findCoreFile();
            if (!coreFile.exists) {
                showLoadError("Could not find " + CORE_FILE_NAME + ".\n\nExpected one of:\n- Next to this script\n- In Scripts/ScriptUI Panels");
                return null;
            }
            $.evalFile(coreFile);
            if (!$.global.ClipboardImageImporterCore || !$.global.ClipboardImageImporterCore.importImageFromClipboard) {
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

    if (!core) {
        return;
    }

    core.importImageFromClipboard({
        allowFolderSelection: true,
        showSuccessAlert: false
    });
})();
