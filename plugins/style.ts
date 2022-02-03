import Vue from 'vue'
import { isArray } from 'lodash'

Vue.directive('style', {
  bind(el: any, binding: any, vnode: any) {
    const classNames = (isArray(binding.value) ? binding.value : binding.value.split(' '))
      .filter((value: any) => typeof value === 'string')

    classNames.forEach((className) => applyStyling(className, el, vnode))
  }
})

const applyStyling = (className: string, el: any, vnode: any) => {
  if (vnode.context?.$style) {
    const localClassName = vnode.context.$style[className]
    if (localClassName) el.classList.add(localClassName)
  }

  if (vnode.context.$parent) {
    const foundClassName = findParentStyling(vnode.context?.$parent, className)

    if (foundClassName) {
      el.classList.add(foundClassName)
    }
  }
}

const findParentStyling = (parent: any, className: string): any => {
  return parent.$style && parent.$style[className] || parent.$parent && findParentStyling(parent.$parent, className)
}
