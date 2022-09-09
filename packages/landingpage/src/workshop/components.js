import MyTest from "@/workshop/MyComponent.vue";
import NavBar from "@/workshop/NavBar.vue";
import NavBarIcons from "@/workshop/NavBarIcons.vue" // <-- the .vue is important!

/**
 *  add your components/ui-pattern below, give it a label and some unique id
 *  your component will be available under .../workshop/my-unique-id
 */
export const components = [
  {
    label: 'Meine Komponente',
    id: 'my-component',
    component: MyTest
  },
  {
    label: 'NavBar',
    id: 'my-nav-bar',
    component: NavBar
  },
  {
    label: 'NavBar with Icons',
    id: 'my-nav-bar-with-icons',
    component: NavBarIcons
  }
]
