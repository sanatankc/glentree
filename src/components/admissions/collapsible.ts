export const openCollapsible = (collapsible: HTMLElement) => {
  if (!collapsible) return
  const collapsibleContent = collapsible.querySelector('.collapsible-content') as HTMLElement
  const collapseIcon = collapsible.querySelector('.collapse-icon')
  if (!collapseIcon) return

  collapsibleContent.style.maxHeight = '100vh'
  collapseIcon.innerHTML = '-'
}

export const closeCollapsible = (collapsible: HTMLElement) => {
  if (!collapsible) return

  const collapsibleContent = collapsible.querySelector('.collapsible-content') as HTMLElement
  const collapseIcon = collapsible.querySelector('.collapse-icon')
  if (!collapseIcon) return

  collapsibleContent.style.maxHeight = '0px'
  collapseIcon.innerHTML = '+'
}

const toggleCollapsible = (collapsible: HTMLElement) => {
  if (!collapsible) return
  const collapsibleContent = collapsible.querySelector('.collapsible-content') as HTMLElement
  const collapseIcon = collapsible.querySelector('.collapse-icon')
  if (!collapseIcon) return

  const isOpened = collapseIcon.innerHTML === '-'
  if (isOpened) {
    collapsibleContent.style.maxHeight = '0px'
    collapseIcon.innerHTML = '+'
  } else {
    collapsibleContent.style.maxHeight = '100vh'
    collapseIcon.innerHTML = '-'
  }
}

const collapsible = (collapseGroupClassName: string, defaultOpen = 0) => {
  const collapsibles = document.querySelectorAll<HTMLElement>(collapseGroupClassName)

  collapsibles.forEach((collapsible: HTMLElement, i: number) => {
    const collapsibleContent = collapsible.querySelector('.collapsible-content')
    const collapseIcon = document.querySelector('.collapse-icon')
    if (collapsibleContent && collapseIcon) {
      collapsible.addEventListener('click', () => {
        collapsibles.forEach((collapsible: HTMLElement, n: number) => {
          if (i !== n) {
            closeCollapsible(collapsible)
            return
          }
          toggleCollapsible(collapsible)
        })
      })
    }
  })

  if (defaultOpen >= 0 && defaultOpen < collapsibles.length) {
    openCollapsible(collapsibles[defaultOpen])
  }
}

export default collapsible