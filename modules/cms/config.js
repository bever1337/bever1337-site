import { pages } from "./collections/pages"
import { navigation } from "./collections/navigation"

export const config = {
  backend: {
    repo: "none",
    branch: "master",
    // api_root: '',
    // site_domain: '',
    // bae_url: '',
    // auth_endpoint: '',
    // name: process.env.NODE_ENV === 'production' ? 'github' : 'test-repo',
    name: process.env.NODE_ENV === "production" ? "github" : "proxy",
    proxy_url: "http://localhost:8081/api/v1",
  },
  media_folder: "static",
  collections: [pages, navigation],
}
