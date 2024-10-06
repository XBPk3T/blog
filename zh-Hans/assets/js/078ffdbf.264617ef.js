"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6312],{2481:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=s(4848),t=s(8453);const a={title:"\u7528 goreleaser \u4ee3\u66ff changelogithub",slug:"/2024/goreleaser",last_update:{date:new Date("2024-09-28T00:00:00.000Z")}},l=void 0,i={id:"2024/goreleaser",title:"\u7528 goreleaser \u4ee3\u66ff changelogithub",description:"\u7528 goreleaser \u4ee3\u66ff changelogithub\uff0c\u6765\u5b9e\u73b0release+changelog",source:"@site/docs/2024/goreleaser.mdx",sourceDirName:"2024",slug:"/2024/goreleaser",permalink:"/zh-Hans/2024/goreleaser",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:17274816e5,frontMatter:{title:"\u7528 goreleaser \u4ee3\u66ff changelogithub",slug:"/2024/goreleaser",last_update:{date:"2024-09-28T00:00:00.000Z"}},sidebar:"zzz",previous:{title:"\u300aMySQL\u662f\u600e\u4e48\u8fd0\u884c\u7684\u300b\u8bfb\u4e66\u7b14\u8bb0",permalink:"/zh-Hans/2024/how-mysql-works"},next:{title:"\u300a\u6280\u672f\u7ba1\u7406\u5b9e\u6218 36 \u8bb2\u300b\u8bfb\u4e66\u7b14\u8bb0",permalink:"/zh-Hans/2024/tech-team-managing"}},o={},c=[{value:"\u7528 goreleaser \u4ee3\u66ff changelogithub\uff0c\u6765\u5b9e\u73b0release+changelog",id:"\u7528-goreleaser-\u4ee3\u66ff-changelogithub\u6765\u5b9e\u73b0releasechangelog",level:2},{value:"\u7528goreleaser\u8fd8\u53ef\u4ee5\u66ff\u6362\u54ea\u4e9bCI?",id:"\u7528goreleaser\u8fd8\u53ef\u4ee5\u66ff\u6362\u54ea\u4e9bci",level:2},{value:"s3",id:"s3",level:3},{value:"\u9700\u8981\u4ed8\u8d39\u7684feats",id:"\u9700\u8981\u4ed8\u8d39\u7684feats",level:2},{value:"\u53d1\u5e03Image\u5230DockerHub\u7b49registry\u5e73\u53f0",id:"\u53d1\u5e03image\u5230dockerhub\u7b49registry\u5e73\u53f0",level:3},{value:"\u7528\u6765\u540c\u6b65 github \u548c dockerhub \u7684 README",id:"\u7528\u6765\u540c\u6b65-github-\u548c-dockerhub-\u7684-readme",level:3},{value:"\u53d1\u5e03linux pkg",id:"\u53d1\u5e03linux-pkg",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u7528-goreleaser-\u4ee3\u66ff-changelogithub\u6765\u5b9e\u73b0releasechangelog",children:"\u7528 goreleaser \u4ee3\u66ff changelogithub\uff0c\u6765\u5b9e\u73b0release+changelog"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"\u6700\u65e9\u77e5\u9053goreleaser\uff0c\u5c31\u662f\u7528\u6765\u5728ci\u65f6\u7528\u6765\u76f4\u63a5release\u5230homebrew\u7684"}),(0,r.jsxs)(n.p,{children:["\u518d\u4e4b\u540e\u53d1\u73b0\u53ef\u4ee5\u7528\u6765\u4ee3\u66ff\u6211\u4e00\u76f4\u4f7f\u7528\u7684 ",(0,r.jsx)(n.code,{children:"antfu/changelogithub"})," + ",(0,r.jsx)(n.code,{children:"softprops/action-gh-release"}),"\uff0c\u7528\u6765\u628achangelog\u76f4\u63a5\u5c55\u793a\u5230release\uff0c\u624d\u51b3\u5b9a\u597d\u597d\u7814\u7a76\u4e00\u4e0bgoreleaser"]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u6bd4\u4e24\u79cd\u5199\u6cd5\uff1a"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"changelogithub + action-gh-release"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  changelog:\n    name: changelog\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@main\n      - uses: actions/setup-node@main\n        with:\n          node-version: 18\n          cache: yarn\n      - run: npx changelogithub\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n    release:\n    name: release\n    runs-on: ubuntu-latest\n    steps:\n      - uses: softprops/action-gh-release@v1\n        if: startsWith(github.ref, 'refs/tags/')\n        with:\n          token: ${{ secrets.GITHUB_TOKEN }}\n          draft: false\n          prerelease: false\n          generate_release_notes: true\n\n"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"goreleaser"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  release:\n    name: release\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@main\n     with:\n       fetch-depth: 0\n      - uses: actions/setup-go@main\n      - uses: goreleaser/goreleaser-action@v5\n        if: startsWith(github.ref, 'refs/tags/')\n        with:\n          version: latest\n          args: release --clean\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\u53ef\u4ee5\u770b\u5230goreleaser\u5185\u7f6e\u4e86\u751f\u6210changeloog\uff0c\u76f4\u63a5release\u5373\u53ef\u3002\u786e\u5b9e\u80fd\u591f\u7b80\u5316\u5f88\u591aworkflow\u3002"})})}),"\n",(0,r.jsx)(n.p,{children:"goreleaser\u652f\u6301changelog + release\uff0c\u4e0a\u9762\u5df2\u7ecf\u63d0\u4f9bworkflow\u4ee3\u7801\u4e86"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u7528\u6765\u4ee3\u66ff\u4e0b\u9762\u8fd9\u4e9bactions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\n- url: https://github.com/antfu/changelogithub\n  des: \u53ef\u4ee5\u7528goreleaser\u7684changelog\u4ee3\u66ff\n\n- url: https://github.com/git-chglog/git-chglog\n  des: \u7528\u6765\u81ea\u52a8\u751f\u6210\u683c\u5f0f\u5316 CHANGELOG\uff0c\u7c7b\u4f3c antfu/changelogithub\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u548c\u6a21\u677f\uff0c\u81ea\u5b9a\u4e49\n\n- url: https://github.com/release-it/release-it\n- url: https://github.com/softprops/action-gh-release\n- url: https://github.com/semantic-release/semantic-release\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7528goreleaser\u8fd8\u53ef\u4ee5\u66ff\u6362\u54ea\u4e9bci",children:"\u7528goreleaser\u8fd8\u53ef\u4ee5\u66ff\u6362\u54ea\u4e9bCI?"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"\u652f\u6301\u5982\u4e0bfeat:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"homebrew (and tap)"}),"\n",(0,r.jsx)(n.li,{children:"release (gh, gitea, gitlab)"}),"\n",(0,r.jsx)(n.li,{children:"changelog"}),"\n",(0,r.jsx)(n.li,{children:"snapshots"}),"\n",(0,r.jsx)(n.li,{children:"gh packages"}),"\n",(0,r.jsx)(n.li,{children:"linux pkg (AUR, snapcraft, .deb, .rpm...)"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0a\u4f20\u5230s3 (and compatible storage), AWS S3, GCS, Azure Storage..."}),"\n",(0,r.jsx)(n.li,{children:"\u517c\u5bb9\u6240\u6709\u4e3b\u6d41CI (github actions, gitlab CI, Drone, Jenkins, ...)"}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"s3",children:"s3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\n- url: https://github.com/bonaysoft/uptoc\n  des: \u7528\u6765\u628a\u6587\u4ef6\u4f20\u5230S3, Google Storage, Qiniu, cos, Aliyun OSS\u7684\u5de5\u5177\u3002\u6bd4\u8f83\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u662f\u628a\u524d\u7aef\u6253\u5305\u597d\u7684dist\u4f20\u5230CDN\u4e0a\u3002\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9700\u8981\u4ed8\u8d39\u7684feats",children:"\u9700\u8981\u4ed8\u8d39\u7684feats"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://goreleaser.com/pro/",children:"Get Pro - GoReleaser"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u4ed8\u8d39(goreleaser PRO $6/Month)\u7684feat"}),"\n",(0,r.jsx)(n.p,{children:"\u603b\u7ed3\u4e00\u4e0b\u5c31\u662f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"docker-image (container registers like dockerhub, gcr, ghcr)"}),"\n",(0,r.jsx)(n.li,{children:"announce (twitter, slack, discord and others)"}),"\n",(0,r.jsx)(n.li,{children:"nightlies"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9010\u6761\u6765\u8bf4\uff0c\u5176\u5b9e\u4e5f\u5404\u81ea\u6709\u5de5\u5177\u53ef\u4ee5\u4ee3\u66ff"}),"\n",(0,r.jsx)(n.h3,{id:"\u53d1\u5e03image\u5230dockerhub\u7b49registry\u5e73\u53f0",children:"\u53d1\u5e03Image\u5230DockerHub\u7b49registry\u5e73\u53f0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\n# docker-image\n\n- url: https://github.com/docker/login-action\n  des: Used to login DockerHub\n\n- url: https://github.com/docker/build-push-action\n  des: Used to push image to DockerHub. Usually used with login-action.\n\n- url: https://github.com/aliyun/acr-login\n  des: Used to login ACR(Aliyun Container Registries)\n\n- url: https://github.com/hhyasdf/image-sync-action\n  des: \u57fa\u4e8e image-syncer \u5b9e\u73b0\uff0c\u7528\u6765\u540c\u6b65\u4e00\u4e9b\u57fa\u4e8eDocker Registry\u7684\u670d\u52a1\uff08\u6bd4\u5982ACR, DockerHub, Quay, Harbor\uff09 What should be noted that it is not a two-way synchronization, but supports synchronizing an image to multiple docker-registries. The main usage scenario of this tool is to directly synchronize the packaged image to multiple platforms during release. There is no need to write a separate job for each docker-registry as before. Using this, we can directly synchronize to multiple platforms. goreleaser has done similar, but accroding this post , goreleaser only supports dockerhub, gcr and ghcr.\n\n- url: https://github.com/ad-m/github-push-action\n  des: push, push to repo itself, we can also push to another repo\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7528\u6765\u540c\u6b65-github-\u548c-dockerhub-\u7684-readme",children:"\u7528\u6765\u540c\u6b65 github \u548c dockerhub \u7684 README"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"Keep DockerHub image descriptions up to date;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/ms-jpq/sync-dockerhub-readme",children:"ms-jpq/sync-dockerhub-readme"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u53d1\u5e03linux-pkg",children:"\u53d1\u5e03linux pkg"}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u63a5\u7528 cloudsmith \u548c fury \u4e5f\u53ef\u4ee5\uff0c\u5e76\u4e0d\u662f\u4e00\u5b9a\u8981\u901a\u8fc7 goreleaser \u8fd9\u4e2a wrapper \u6765\u64cd\u4f5c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://goreleaser.com/customization/cloudsmith/",children:"Cloudsmith - GoReleaser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://goreleaser.com/customization/fury/",children:"Fury - GoReleaser"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(6540);const t={},a=r.createContext(t);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);