import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.282b93a4.js";const _=JSON.parse('{"title":"开发攻略","description":"","frontmatter":{},"headers":[],"relativePath":"guide/go.md","filePath":"guide/go.md"}'),l={name:"guide/go.md"},p=e(`<h1 id="开发攻略" tabindex="-1">开发攻略 <a class="header-anchor" href="#开发攻略" aria-label="Permalink to &quot;开发攻略&quot;">​</a></h1><h3 id="_1、修改环境变量" tabindex="-1">1、修改环境变量 <a class="header-anchor" href="#_1、修改环境变量" aria-label="Permalink to &quot;1、修改环境变量&quot;">​</a></h3><p><code>./.env</code>文件下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># CSS预处理器 默认支持sass和less</span></span>
<span class="line"><span style="color:#e1e4e8;">CSS_PREPROCESSOR = &#39;scss&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"># 用于添加组件命名前缀，建议采用首字母大写格式，最后生成的组件会变成&lt;vc-button&gt;&lt;/vc-button&gt;这种格式</span></span>
<span class="line"><span style="color:#e1e4e8;">COMPONENT_NAME = &#39;Vc&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># CSS预处理器 默认支持sass和less</span></span>
<span class="line"><span style="color:#24292e;">CSS_PREPROCESSOR = &#39;scss&#39;</span></span>
<span class="line"><span style="color:#24292e;"># 用于添加组件命名前缀，建议采用首字母大写格式，最后生成的组件会变成&lt;vc-button&gt;&lt;/vc-button&gt;这种格式</span></span>
<span class="line"><span style="color:#24292e;">COMPONENT_NAME = &#39;Vc&#39;</span></span></code></pre></div><h3 id="_2、创建约定文件" tabindex="-1">2、创建约定文件 <a class="header-anchor" href="#_2、创建约定文件" aria-label="Permalink to &quot;2、创建约定文件&quot;">​</a></h3><p>建议运行 <code>pnpm component:create [组件名]</code>命令来创建组件开发需要用到的文件。</p><p>详细介绍上述这条命令做了哪些操作（以创建button组件为例）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─packages</span></span>
<span class="line"><span style="color:#e1e4e8;">|    ├─components</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     ├─style</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |   └index.scss			   // 自动引入&#39;button/src/style/index.scss&#39;的样式，作为全局样式</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     ├─src</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  ├─components.ts          // 自动引入&#39;button/src/index.ts&#39;导出的组件</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  ├─index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  ├─button</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  |   ├─index.ts           // 自动引入src下的组件，并且对组件进行注册</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  |   ├─src				   // 自动创建组件开发使用到的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  |   |  ├─button.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  |   |  ├─style</span></span>
<span class="line"><span style="color:#e1e4e8;">|    |     |  |   |  |   └index.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">├─docs</span></span>
<span class="line"><span style="color:#e1e4e8;">|  ├─guide</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |   ├─components</span></span>
<span class="line"><span style="color:#e1e4e8;">|  |   |     └button.md					// 自动创建组件文档说明需要的文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├─packages</span></span>
<span class="line"><span style="color:#24292e;">|    ├─components</span></span>
<span class="line"><span style="color:#24292e;">|    |     ├─style</span></span>
<span class="line"><span style="color:#24292e;">|    |     |   └index.scss			   // 自动引入&#39;button/src/style/index.scss&#39;的样式，作为全局样式</span></span>
<span class="line"><span style="color:#24292e;">|    |     ├─src</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  ├─components.ts          // 自动引入&#39;button/src/index.ts&#39;导出的组件</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  ├─index.ts</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  ├─button</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  |   ├─index.ts           // 自动引入src下的组件，并且对组件进行注册</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  |   ├─src				   // 自动创建组件开发使用到的文件</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  |   |  ├─button.vue</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  |   |  ├─style</span></span>
<span class="line"><span style="color:#24292e;">|    |     |  |   |  |   └index.scss</span></span>
<span class="line"><span style="color:#24292e;">├─docs</span></span>
<span class="line"><span style="color:#24292e;">|  ├─guide</span></span>
<span class="line"><span style="color:#24292e;">|  |   ├─components</span></span>
<span class="line"><span style="color:#24292e;">|  |   |     └button.md					// 自动创建组件文档说明需要的文件</span></span></code></pre></div><ul><li>我们在组件开发的过程中只需要关注 <code>button/src</code> 下文件的编写。</li><li>在编写说明文档的时候只需要关注 <code>docs/guide/components/</code>下的文档内容。</li></ul><h3 id="_3、组件测试" tabindex="-1">3、组件测试 <a class="header-anchor" href="#_3、组件测试" aria-label="Permalink to &quot;3、组件测试&quot;">​</a></h3><p>vuecomp-starter已经帮助全局引入packages下的组件，我们只需要在文档中直接编写就可以看到组件。</p><p>也可以使用内置的测试环境对组件进行测试，我们已经对运行环境做了约定式路由处理，直接在pages下创建文件就可以自动映射对应的路由，类似于Nuxt。</p>`,12),t=[p];function o(c,i,r,d,y,u){return n(),a("div",null,t)}const g=s(l,[["render",o]]);export{_ as __pageData,g as default};
