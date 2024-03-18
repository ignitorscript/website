# Navigation Roadmap

# 1. `Navigation.Group`

- [ ] just a wrapper for `Navigation.Menu`
- [ ] passing its baseId of in case `Navigation.Group` is using

# 2. `Navigation.Menu`

- [ ] manage portal style
- [ ] manage portal element
- [ ] passing its baseId to component
- [ ] manage indicator style

# 3. `Navigation.List`

- [ ] manage start/stop tracking item has been hover
- [ ] manage store item has been hover
- [ ] itself focus if its `Navigation.Button`/`Navigation.Link` focus
- [ ] `Navigation.Button`/`Navigation.Link` must implement strict system
- [ ] passing its baseId to component

# 4. `Navigation.Generic`

- [ ] itself focus if its `Navigation.Button`/`Navigation.Link` focus
- [ ] `Navigation.Button`/`Navigation.Link` must implement loose system
- [ ] passing its baseId to component

# 5. `Navigation.Portal`

- [ ] passing its baseId to component
- [ ] exposed `Navigation.Item` `offsetTop`/`offsetLeft` when `Navigation.Item` hover
- [ ] exposed `Navigation.Content`/`Navigation.Panel` its `width`/`height` when `Navigation.Content`/`Navigation.Panel` active
- [ ] exposed animation state `from-end`/`to-end`/`to-start`/`from-start` and `active`

# 6. `Navigation.Item`

- [ ] passing its baseId to component
- [ ] itself focus if its `Navigation.Button`/`Navigation.Link` focus
- [ ] trigger id in its `Navigation.List` that active/deactive

# 7. `Navigation.Indicator`

- [ ] exposed `Navigation.Item` `offsetTop`/`offsetLeft` when `Navigation.Item` hover
- [ ] exposed `Navigation.Content`/`Navigation.Panel` its `width`/`height` when `Navigation.Content`/`Navigation.Panel` active

# 8. `Navigation.Link`

- [ ] exposed itself focus
- [ ] exposed itself hover
- [ ] should implement strict/loose base on which `Navigation.List`/`Navigation.Generic`

# 9. `Navigation.Button`

- [ ] exposed itself focus
- [ ] exposed itself hover
- [ ] should implement strict/loose base on which `Navigation.List`/`Navigation.Generic`

# 10. `Navigation.Content`

- [ ] passing its baseId to component
- [ ] must not render of `tracking` is not active
- [ ] must render in `Navigation.Portal`

# 11. `Navigation.Panel`

- [ ] passing its baseId to component
- [ ] must not render of `tracking` is not active
- [ ] must render nearby its trigger

# 12. `Navigation.SubList`

- [ ] passing its baseId to component
- [ ] manage start/stop tracking item has been hover
- [ ] manage store item has been hover
- [ ] itself focus if its `Navigation.SubButton`/`Navigation.SubLink` focus
- [ ] `Navigation.SubButton`/`Navigation.SubLink` must implement strict system

# 13. `Navigation.SubItem`

- [ ] passing its baseId to component
- [ ] itself focus if its `Navigation.Button`/`Navigation.Link` focus
- [ ] trigger id in its `Navigation.SubList` that active/deactive

# 14. `Navigation.SubLink`

- [ ] exposed itself focus
- [ ] exposed itself hover
- [ ] should implement strict base on which `Navigation.SubList`

# 15. `Navigation.SubButton`

- [ ] exposed itself focus
- [ ] exposed itself hover
- [ ] should implement strict base on which `Navigation.SubList`

# 16. `Navigation.SubPanel`

- [ ] passing its baseId to component
- [ ] must not render of `tracking` is not active
- [ ] must render nearby its trigger
