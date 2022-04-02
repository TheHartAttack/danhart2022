function reducer(draft, action) {
  switch (action.type) {
    case "setSection":
      draft.section = action.data
      return
    case "showHeader":
      draft.showHeader = action.data
      return
    case "showFooter":
      draft.showFooter = action.data
      return
    case "setSize":
      draft.size = action.value
      return
    case "openMenu":
      draft.menuOpen = true
      return
    case "closeMenu":
      draft.menuOpen = false
      return
  }
}

export default reducer
