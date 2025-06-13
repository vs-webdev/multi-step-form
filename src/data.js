import arcade from '/icon-arcade.svg'
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'

export const addOnsData = [
  {
    heading: 'Online Service',
    description: 'Access to multiplayer games',
    state: false,
    price: {monthly: 1, yearly: 10},
  },
  {
    heading: 'Large Storage',
    description: 'Extra 1TB of cloud save',
    state: false,
    price: {monthly: 1, yearly: 10},
  },
  {
    heading: 'Customizable Profile',
    description: 'Custom theme on your profile',
    state: false,
    price: {monthly: 2, yearly: 20},
  },
]

export const plansData = [
    {
      title: 'Arcade',
      price: {monthly: 9, yearly: 90},
      icon: arcade,
      selected: true,
    },
    {
      title: 'Advanced',
      price: {monthly: 12, yearly: 120},
      icon: advanced,
      selected: false,
    },
    {
      title: 'Pro',
      price: {monthly: 15, yearly: 150},
      icon: pro,
      selected: false,
    },
  ]