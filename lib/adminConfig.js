AdminConfig = {
  name: 'Daniel Arrizza',
  collections: {
    Projects: {
      tableColumns: [
        { label: 'Name', name: 'name' },
      ]
    },
    Links: {
      tableColumns: [
        { label: 'Name', name: 'name' },
      ]
    }
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
};
