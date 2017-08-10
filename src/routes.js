const routes = [
  {
    label: 'Overview',
    url: '/overview',
    state: 'overview',
    children: []
  },

  {
    label: 'Inbox',
    url: '/inbox',
    state: 'inbox',
    children: []
  },

  {
    label: 'Tasks',
    url: '/tasks',
    state: 'tasks.saved-view',
    children: []
  },

  {
    label: 'Listings',
    url: '/listings',
    state: 'listings.view',
    children: []
  },

  {
    label: 'Multi-Calendar',
    url: '/calendar',
    state: 'listings-multiCalendar',
    children: []
  },

  {
    label: 'Reservations',
    url: '/reservations',
    state: 'reservations.view',
    children: []
  },

  {
    label: 'Guest Book',
    url: '/guest-book',
    state: 'guestBook',
    children: []
  },

  {
    label: 'Phone Book',
    url: '/phone-book',
    state: 'phoneBook',
    children: []
  },

  {
    label: 'Analytics',
    url: '/analytics',
    state: 'analytics',
    children: []
  },

  {
    label: 'Account', // TODO: change to abstract url for matching
    children: [
      {
        label: 'Account Details',
        url: '/account',
        state: 'account.details',
      },

      {
        label: 'System Settings',
        url: '/account/settings',
        state: 'account.system',
      },

      {
        label: 'My Profile',
        url: '/account/profile',
        state: 'user', //TODO: Need to have account id in url param
      },

      {
        label: 'Users',
        url: '/account/users',
        state: 'account.users',
      },

      {
        label: 'Integrations',
        url: '/account/integrations',
        state: 'account.integrations',
      },
    ]
  },

  {
    label: 'Billing',
    children: [
      {
        label: 'Payment Status',
        url: '/billing/status',
        state: 'billing.main',
      },

      {
        label: 'Upcoming Invoice',
        url: '/billing/invoice',
        state: 'billing.upcoming',
      },

      {
        label: 'Billing History',
        url: '/billing/history',
        state: 'billing.history',
      }
    ]
  }
];

export default routes;
