import arcade from '/icon-arcade.svg'
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'

export const addOnsData = [
  {
    heading: 'Online Service',
    description: 'Access to multiplayer games',
    state: false,
    price: 1,
  },
  {
    heading: 'Large Storage',
    description: 'Extra 1TB of cloud save',
    state: false,
    price: 2,
  },
  {
    heading: 'Customizable Profile',
    description: 'Custom theme on your profile',
    state: false,
    price: 2,
  },
]

export const plansData = [
    {
      title: 'Arcade',
      price: 9,
      icon: arcade,
      selected: true,
    },
    {
      title: 'Advanced',
      price: 12,
      icon: advanced,
      selected: false,
    },
    {
      title: 'Pro',
      price: 15,
      icon: pro,
      selected: false,
    },
  ]