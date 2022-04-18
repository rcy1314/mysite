import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '69a25fc6e04b471eac64c8757a2c2bae',

  // It's will be used as the root page when running `yarn dev`. (optional)
  // If you are suffering from the slow loading or compiling speed, set this to a smaller page.
  // Just leave `null` if you don't want to use it.
  rootNotionTestPageId: 'bc6a0368-deb4-4410-9980-12d12d8c4da2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'NOISE | 知识效率集',
  domain: 'https://www.noisesite.cn',
  author: '知识效率集',

  // open graph metadata (optional)
  description: '知识效率集',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Giscus comments via Github Discusstion (optional)
  //
  // To generate the following configs, visit https://giscus.app/.
  giscusGithubConfig: {
    repo: 'rcy1314/notiontalk',
    repoId: 'R_kgDOHMkz2w',
    category: 'General',
    categoryId: 'DIC_kwDOHMkz284COpbA',
    mapping: 'title',
    reactionsEnabled: '1',
    theme: 'dark_protanopia',
    term: null,
  },
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // Optional: Normally, the page contain it's metadata
  // like `CreatedTime`, `LastEditedTime`.
  // These metadata cannot be changed by the user.
  // If you want to override this with a page property (so that
  // you can custom it's value), specify it's name here.
  //
  // This should align with the property name in Notion.
  // And the data type should be `Date` or `String`.
  // Any invalid data type will be ignored and fallback to default metadata.
  //
  // These metadata will be used when generating RSS, Sitemap, etc.
  OverrideCreatedTime: null,
  OverrideLastEditedTime: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '关于',
      pageId: '0f882a85a8f498da7a5320473d050dc'
    },
    {
      title: '爱发电',
      pageId: '7e3cd71363a147729f607d29b165b5c9'
    }
  ]
})
