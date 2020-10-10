export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f813f0496eb03b043e230cb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-him6s53p',
                  apiId: '75744699-185c-4a15-a12b-06e641c07587'
                },
                {
                  buildHookId: '5f813f04005db8d60fecc0bc',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ykmpc5sf',
                  apiId: '0bfdd86f-95fc-43df-a7bd-5d83838a3f88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/broeker/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ykmpc5sf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
