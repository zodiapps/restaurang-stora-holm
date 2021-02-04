module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a new shared component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions() {
      return [
        {
          type: 'add',
          path: 'components/{{ pascalCase name }}.vue',
          templateFile: '.plop/templates/Component.vue.hbs',
        },
      ]
    },
  })
}
