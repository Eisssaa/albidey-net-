import { Cable, Radio, Smartphone, Satellite, Router, Wifi, Antenna, Network } from 'lucide-react'

export const connections = [
  {
    icon: Cable,
    tag: 'Wired',
    name: 'Fiber Optic',
    text: 'Dedicated high-capacity fiber links for organisations that cannot afford downtime.',
    points: ['Symmetrical, dedicated capacity', 'Built for critical workloads', 'Proactive monitoring 24/7'],
  },
  {
    icon: Radio,
    tag: 'Wireless',
    name: 'Radio Local Loop',
    text: 'Fast point-to-point radio links, deployed quickly where fiber has not reached.',
    points: ['Rapid deployment', 'Resilient last-mile access', 'Professional installation'],
  },
  {
    icon: Smartphone,
    tag: 'Mobile',
    name: '4G LTE',
    text: 'Flexible mobile broadband for branches, sites and backup connectivity.',
    points: ['Quick to activate', 'Ideal as failover link', 'Works across coverage areas'],
  },
  {
    icon: Satellite,
    tag: 'Satellite',
    name: 'VSAT',
    text: 'Satellite connectivity for remote locations and field operations.',
    points: ['Reach remote sites', 'Independent of terrestrial networks', 'Suited to field missions'],
  },
]

export const hardware = [
  { icon: Router, tag: 'Indoor', name: 'Routers & gateways', text: 'Reliable indoor routers configured and supported by our engineers.' },
  { icon: Antenna, tag: 'Outdoor', name: 'Outdoor radios', text: 'Weather-ready radio equipment for long-range links.' },
  { icon: Wifi, tag: 'WiFi', name: 'Access points', text: 'Enterprise WiFi access points for offices, hotels and campuses.' },
  { icon: Network, tag: 'LAN', name: 'Switching', text: 'Managed switching with LAN separation for sensitive environments.' },
]
