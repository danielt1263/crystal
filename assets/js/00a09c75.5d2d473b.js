"use strict";(self.webpackChunk_localrepo_postgraphile_website=self.webpackChunk_localrepo_postgraphile_website||[]).push([[6211],{98607:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2023-08-03-version-5-beta","metadata":{"permalink":"/news/2023-08-03-version-5-beta","source":"@site/news/2023-08-03-beta-release.md","title":"PostGraphile V5 public beta \u2014 get involved!","description":"It\u2019s finally here! The day has come that you can get your hands on an early release of PostGraphile Version 5!","date":"2023-08-03T00:00:00.000Z","formattedDate":"August 3, 2023","tags":[{"label":"Beta","permalink":"/news/tags/beta"}],"readingTime":6.28,"hasTruncateMarker":true,"authors":[{"name":"Benjie","title":"Creator of PostGraphile","url":"https://github.com/Benjie","image_url":"https://github.com/Benjie.png","imageURL":"https://github.com/Benjie.png"},{"name":"Jem","title":"\u201cI wear many hats\u201d","url":"https://fosstodon.org/@jem","image_url":"https://github.com/jemgillam.png","imageURL":"https://github.com/jemgillam.png"}],"frontMatter":{"title":"PostGraphile V5 public beta \u2014 get involved!","description":"It\u2019s finally here! The day has come that you can get your hands on an early release of PostGraphile Version 5!","slug":"2023-08-03-version-5-beta","authors":[{"name":"Benjie","title":"Creator of PostGraphile","url":"https://github.com/Benjie","image_url":"https://github.com/Benjie.png","imageURL":"https://github.com/Benjie.png"},{"name":"Jem","title":"\u201cI wear many hats\u201d","url":"https://fosstodon.org/@jem","image_url":"https://github.com/jemgillam.png","imageURL":"https://github.com/jemgillam.png"}],"tags":["Beta"],"hide_table_of_contents":false,"toc_max_heading_level":2},"nextItem":{"title":"PostGraphile V5 alpha is here!","permalink":"/news/2023-04-26-version-5-alpha"}},"content":"### It\u2019s finally here! The day has come that you can get your hands on an _early release_ of PostGraphile Version 5; but we do have an ask: please help us to get it ready for release.\\n\\nWe need help writing automated tests, validating it works in your real-world applications, improving the documentation, keeping up with issues and community support, porting plugins, smoothing edges, and as always we need financial support so we can keep investing our time into V5 and our other projects.\\n\\nIt has taken us 3.5 years to get to this point and we\u2019re pretty happy with the result, but there\u2019s still plenty to be done before we\u2019re ready to give it the big V5.0.0 stamp of approval!\\n\\n## How can I help?\\n\\n**Help us to ensure that the documentation is ready.** We\u2019ve invested many weeks into writing the documentation for the various packages and projects (22 of them at last count!) which make up PostGraphile V5, but there\u2019s still lots to do. We need people to read and follow the documentation, and to find the mistakes therein and submit issues or even patches.\\n\\n**Help us to ensure that the software addresses your needs.** We\u2019ve spent three years building this system, but it\u2019s only really been tested by other people in the last 6 months. Early signs are very positive, but we want to know: does it work for you? Does it do what you need it to?\\n\\n**Help us to ensure that the transition from V4 is as easy as possible.** We\u2019ve spent a significant amount of time making the transition from V4 to V5 as easy as we can, building a preset that generates an almost identical schema, porting some of the V4 plugins to V5, and writing [detailed migration documentation](https://postgraphile.org/postgraphile/next/migrating-from-v4/). But we need your help: did migrating from V4 work well for you? Where were the rough edges, and how can we smooth them? Are you willing to help port community V4 plugin to V5?\\n\\n**Help us to test V5.** We have ported the V4 test suite over to V5 so we know that it works well for that, but there\u2019s so many different combinations of options and plugins that you can do with PostGraphile that many have only been tested manually, and they really need automated tests to prevent regressions. We also need you to use V5 in your own applications and let us know how you get on \u2014 both negative and positive \u2014 to help us move towards the all-important 5.0.0 release.\\n\\n**Help us to improve the experience of V5.** We\u2019ve put a lot of effort into both documentation and TypeScript types, but these can always be improved. There\u2019s boilerplate in a few places that could be addressed with improvements to APIs, or with new abstractions. Try it out, and help us to improve the developer experience!\\n\\n**Help us to educate people about V5.** We don\u2019t have a marketing department, we cannot afford a developer relations team or to sponsor big events. We\u2019ll need your help to get the word out about PostGraphile V5, when the time comes; in the meantime we could really do with some help building example applications and tutorials to help people get started.\\n\\n\x3c!--truncate--\x3e\\n\\n## What does \u201cbeta\u201d mean for PostGraphile?\\n\\nWe believe that **PostGraphile V5 is suitable to run in production** and that we\u2019ve completed most of the significant API rewrites that we wanted to make. There\u2019s still some expected (and maybe a couple unexpected) changes to come, but mostly the beta phase is there to gather feedback from the community about how it works for you, and to leave space to make breaking changes if they turn out to be necessary before we place the stamp on the final V5.0.0 release.\\n\\n### Tests, docs and examples\\n\\nMany of the [remaining issues](https://github.com/benjie/crystal/milestone/3) are to add tests, write documentation and build examples; if you\u2019re someone who doesn\u2019t like to ask politely for help and expects the documentation to be complete when they come to use the software then you should probably hold off from using PostGraphile V5 until the v5.0.0 release is out.\\n\\n### TypeScript types\\n\\nOne significant outstanding task which will likely cause some \u201cbreaking changes\u201d is to review and potentially rewrite some of the TypeScript types. In some places types are a bit loose, in others there are old generics left around that are no longer needed, or generics in the wrong order, or other similar concerns. These issues don\u2019t make the system unsafe to run in production, but they do require breaking changes to resolve, and we don\u2019t want to have to jump to version 6 just to fix the TypeScript types of one of our APIs!\\n\\nWe would love your help with this if you\u2019re good at TypeScript!\\n\\n### Other \u201cnice-to-haves\u201d\\n\\nThere are also a couple of other features that need to be added, for example integrating the Koa adaptor with Koa\u2019s websocket framework like we\'ve already done for Fastify. V4 of PostGraphile \u201cemulated\u201d an express stack for websocket connections in order to allow things like `pgSettings` to continue to function, but in V5 we\u2019ll be better integrating the functionality of the different webservers \u2014 you\u2019ll be able to read about that in Part 7 of [our \u201cIntro to V5\u201d series](https://dev.to/benjie/series/23459)!\\n\\nThere\u2019s also a bunch of optional enhancements that we\u2019d really like to have in place before we launch v5.0.0 but if necessary we can do them later:\\n\\n- digging into the generated SQL and optimizing it _even further_,\\n- integrating the Node http2 webserver,\\n- optimizing the code that\u2019s exported by the Graphile Export command [you may have read about last week](https://dev.to/graphile/intro-to-postgraphile-v5-part-6-excellent-executable-exports-1150).\\n\\nThere\u2019s also the ongoing work to improve the tooling around our tooling, to make it easier for you to debug issues.\\n\\n## How do I try it out?\\n\\nIf you\u2019re a V4 user then now is an excellent time to take V5 for a spin and let us know how you get on! You don\u2019t even have to commit to migrating (though we hope once you\u2019ve had a go you\u2019ll definitely want to!), just some quick experiments with the things that you use PostGraphile for could be very useful.\\n\\nYou can read all about the new features in V5 in our new series [Intro to V5](https://dev.to/graphile/intro-to-postgraphile-v5-part-1-replacing-the-foundations-3lh0) or if you prefer to just read the highlights, check out the migration guide\u2019s [new feature summary](https://postgraphile.org/postgraphile/next/migrating-from-v4/v5-new-feature-summary) and be sure to expand the bullets that have more details!\\n\\nAll the packages are published under the `@beta` tag, so you\'ll need to ensure you include that when issuing install instructions (e.g. `yarn add postgraphile@beta`).\\n\\nThe fastest way to try PostGraphile V5 is with our new `pgl` command which you don\u2019t even have to install:\\n\\n```\\nnpx pgl@beta -P pgl/amber -e -c postgres:///my_db -s public\\n```\\n\\n(Replace the connection string and schema name with your database connection string and schema name(s).)\\n\\nIf you want to try PostGraphile V5 with a few plugins, one option is:\\n\\n1. Check out [https://github.com/benjie/ouch-my-finger](https://github.com/benjie/ouch-my-finger)\\n2. Run `yarn` to install the dependencies\\n3. Run `yarn postgraphile -c postgres:///my_db -s public` giving your database\u2019s connection string and schema(s)\\n\\nIdeally, you\u2019d follow [the migration guide](https://postgraphile.org/postgraphile/next/migrating-from-v4/) and start integrating V5 into your existing projects!\\n\\n### Join our testing community\\n\\nIf you use Discord, join our server at [https://discord.gg/graphile](https://discord.gg/graphile) and chat away with other V5 users \u2014 talk over the new features, discuss any issues you encounter and explore different ways of using the new projects. We look forward to welcoming you and hearing of your suggestions and successes with V5!"},{"id":"2023-04-26-version-5-alpha","metadata":{"permalink":"/news/2023-04-26-version-5-alpha","source":"@site/news/2023-04-26-alpha-release.md","title":"PostGraphile V5 alpha is here!","description":"PostGraphile Version 5 is now ready to run in some production environments!","date":"2023-04-26T00:00:00.000Z","formattedDate":"April 26, 2023","tags":[{"label":"Alpha","permalink":"/news/tags/alpha"}],"readingTime":6.835,"hasTruncateMarker":true,"authors":[{"name":"Benjie","title":"Creator of PostGraphile","url":"https://github.com/Benjie","image_url":"https://github.com/Benjie.png","imageURL":"https://github.com/Benjie.png"},{"name":"Jem","title":"\u201cI wear many hats\u201d","url":"https://fosstodon.org/@jem","image_url":"https://github.com/jemgillam.png","imageURL":"https://github.com/jemgillam.png"}],"frontMatter":{"title":"PostGraphile V5 alpha is here!","description":"PostGraphile Version 5 is now ready to run in some production environments!","slug":"2023-04-26-version-5-alpha","authors":[{"name":"Benjie","title":"Creator of PostGraphile","url":"https://github.com/Benjie","image_url":"https://github.com/Benjie.png","imageURL":"https://github.com/Benjie.png"},{"name":"Jem","title":"\u201cI wear many hats\u201d","url":"https://fosstodon.org/@jem","image_url":"https://github.com/jemgillam.png","imageURL":"https://github.com/jemgillam.png"}],"tags":["Alpha"],"hide_table_of_contents":false},"prevItem":{"title":"PostGraphile V5 public beta \u2014 get involved!","permalink":"/news/2023-08-03-version-5-beta"}},"content":"### Now production ready\u2026 for some environments\\n\\nJanuary marked a big milestone for PostGraphile Version 5, when it began the prealpha stage - where early adopters could install the packages from npm (if they knew the secret \ud83d\ude09) and easily test V5 within their current stacks. Up until that point, it was only possible to run the project by cloning the repository and building it yourself - not ideal for serious testing!\\n\\nThroughout the prealpha phase we smoothed the edges, closed gaps, tidied APIs, discovered which pieces of terminology worked and which did not, and did a lot of API restructuring and stabilization.\\n\\nWith thanks to everyone in the V5 testing community - and a special shout out for the excellent and continued feedback from our sponsors dfg, hov, James, Josiah and the Netflix team, mattste, Simon, and Timo - we are in a much better shape three months on. We now have a [detailed migration guide](/postgraphile/next/migrating-from-v4), [updated docs](/postgraphile/next), an enhanced developer experience and much improved backwards compatibility!\\n\\n### What\u2019s new in Version 5?\\n\\nOur main aim in V5 was to replace the cumbersome lookahead system with something much more pleasant and powerful. To serve this need we iterated and iterated, and ultimately invented Gra*fast*: a new planning and execution engine for GraphQL (see our public video introduction [on YouTube](https://youtu.be/H26uBe_lLag)). Gra*fast* uses a declarative planning system which brings with it a new, holistic approach to executing GraphQL queries. For you, this means simpler abstractions, better performance, and code which is easier to read and maintain.\\n\\nGra*fast* even generates a plan diagram showing what steps are necessary to execute your operation and how the data flows between each of the steps, which is a massive boon to debugging both for you, and for us!\\n\\n<figure>\\n\\n[![A Grafast plan diagram for an AllPosts query](../static/img/news/2023-04-26-mermaid-diagram.png)](../static/img/news/2023-04-26-mermaid-diagram.png)\\n\\n<figcaption>\\n\\nAn autogenerated Gra*fast* plan diagram for the displayed GraphQL query. Plan diagrams detail the steps required to complete a GraphQL request and show how the data flows between them. See [\\"Plan Diagrams\\"](https://grafast.org/grafast/plan-diagrams) in the Gra*fast* documentation for more details.\\n\\n</figcaption>\\n</figure>\\n\\n\x3c!--truncate--\x3e\\n\\nThanks to these advanced planning capabilities, PostGraphile is now able to generate much more optimal (and easier to read!) SQL queries and offload significant work from the database, allowing your applications to scale even further than previously possible.\\n\\n<figure>\\n\\n[![A GraphQL query for AllPosts](../static/img/news/2023-04-26-v4-v5-comparison.png)](../static/img/news/2023-04-26-v4-v5-comparison.png)\\n\\n<figcaption>\\n\\nAn example of the vast improvement in the autogenerated SQL queries in Version 5 as compared to Version 4 for the same [GraphQL \u201cAllPosts\u201d query](../static/img/news/2023-04-26-comparison-query-ruru.png). Generated SQL is now easier to understand and debug, and the V5 SQL query shown is twice as fast as the V4 SQL query.\\n\\n</figcaption>\\n</figure>\\n\\nSince the lookahead system underpinned everything in Version 4, replacing it meant we needed to rebuild everything from the ground-up on these new, more solid and capable foundations. We decided to use this opportunity to fix a huge number of other niggles and suboptimal experiences that were present in V4 - and also enable a decent complement of capabilities that simply were not possible in the V4 architecture. Ultimately, Version 5 brings a number of new paradigms to PostGraphile; some of the main features of PostGraphile V5 you\'ll be able to enjoy include:\\n\\n- Multiple forms of database-based polymorphism (producing GraphQL interfaces and unions)\\n- GraphQL\u2019s new incremental delivery (`@stream` and `@defer` directives) [early version]\\n- Exporting your executable schema as optimized JS code\\n- New \u201cbehavior\u201d system that fixes the shortcomings of `@omit` and similar smart tags\\n- Massively enhanced TypeScript typings throughout\\n- Generate personalized documentation based on the plugins and presets you\u2019re using\\n- On-demand transactions - enabling workflows which Version 4\u2019s model precluded\\n- Consolidated configuration across CLI, library and schema-only usage\\n- Shareable and composable presets\\n- A unified and more powerful plugin system\\n- And much, much more!\\n\\n### It\u2019s in Alpha, Jim, but not as we know it\\n\\nWhile some projects use the alpha phase for discovery and prototyping, and suffer through countless breaking changes and critical bugs, we\'ve already completed that phase \u2013 we\u2019re ready to take things to the next level.\\n\\nNow is the time for you to try out V5! We\'re confident that our software will generate a fully functional GraphQL schema for you, and it already passes the full suite of Version 4 tests (plus many more), and is in use by a number of testers. We even made a V4 preset and detailed migration guide to allow you to get started as easily as possible.\\n\\n**If you don\u2019t try V5 until after its public release then it may be too late to comment on things that could have been improved**. Though we believe our APIs are already in near-final form, remaining in alpha phase gives us the freedom to apply breaking changes to APIs if the benefits outweigh the costs.\\n\\nGet involved! Does it solve your problems? Can we make it easier for you to migrate to? Are there performance regressions? Do the TypeScript types align with your usage?\\n\\n[Visit the migration guide to get started](/postgraphile/next/migrating-from-v4).\\n\\n### Where to use Version 5 today\\n\\nIf you\u2019re using PostGraphile with purely pre-vetted operations (e.g. via persisted operations), or are using PostGraphile with an API audience which is generally trusted (e.g. as internal services within your company) then with careful consideration and monitoring you should be safe to put V5 into production today. Early results from testers have been very promising!\\n\\nIf you\u2019re using PostGraphile in a more public facing capacity and are not protecting it with an operation allowlist then you may want to start testing on your development and staging servers but hold off from a production release until we\u2019ve added a few additional safety measures (for example, adding a planning timeout to prevent denial of service through expensive planning attacks).\\n\\nIf you just want to help out in the testing of V5 without shipping to production, you should check out our quick start repo, [ouch-my-finger](https://github.com/benjie/ouch-my-finger), which is kept up to date with the latest V5 releases. It\u2019s a great way to connect to your database in a test environment and give V5 a go, and also a great way to send reproducible test cases to us if you hit any snags.\\n\\nAs the alpha progresses we hope, with the help of your feedback and testing, the software will become more and more suitable for running in various production environments. We can\'t wait to see what you build with it!\\n\\n### Beyond Alpha...\\n\\nBy the end of the alpha phase, we should all be confident that V5 is safe to run in production, and all the expected API changes should be complete. Then we\'ll move onto the beta phase, during which we\'ll focus on performance, documentation, and also improving the experience. For example, this would be the phase during which we\'ll be putting time into making sure that the schema exporting functionality is outputting pleasant code, and making it easy for plugin developers to indicate whether or not their plugins support exporting.\\n\\nWork helping to migrate V4 community plugins to V5 will also continue during this phase, as may experimentation with additional functionality such as live queries. Beta users should find the API stability much improved since the alpha, but we still reserve the right to release breaking API changes if they have substantial benefits.\\n\\nBy the end of the beta phase, the APIs should be stable, the software should be performant, and everyone involved should be confident running it in production. Then we\'ll take the final beta and release it as \\"release candidate 1,\\" and all going well, ultimately release that as PostGraphile v5.0.0.\\n\\nIt has been a long road to get here, and we thank you all so much for your continued support - we could never have accomplished this feat without you! We really hope you\'re going to love PostGraphile V5 and all the new technology and tooling that it introduces to make your jobs both easier and more fun. Thank you!\\n\\n_Keep your eyes peeled for a series of articles going into a greater depth about each of the new features of Version 5, a digest of which will be shared to our mailing list, our [community Discord](https://discord.gg/graphile) and [social media](https://fosstodon.org/@graphile)._"}]}')}}]);