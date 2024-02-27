import { api } from "../services";

export default function versionCheck() {
  const currentVersion = localStorage.getItem("D_SHA");
  console.log('currentVersion', currentVersion);
  api.helper.info(true).then((r) => {
    if (r == null) {
      console.log(
        `%c VERSION GUARD: Could not get data about the version of the application. The page will not be reloaded.`,
        "color: red"
      );
      return;
    }
    if (r?.webRepoLastCommitSha != currentVersion) {
      console.log(`%c VERSION GUARD: The page has been updated due to version inconsistencies.`, "color: orange");
      localStorage.setItem("D_SHA", r?.webRepoLastCommitSha ?? "NO SHA");
      setTimeout(() => {
        if (window.location?.hostname == "localhost") return;
        window.location.href = window.location.href.replace(/#.*$/, "");
      }, 1);
    } else {
      console.log(`%c VERSION GUARD: The current version of the application is up to date.`, "color: green");
    }
  });
}
