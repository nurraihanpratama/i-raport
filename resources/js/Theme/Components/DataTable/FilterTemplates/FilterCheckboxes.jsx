import { useState } from 'react'

export default function FilterCheckboxes({ data, onChange, currentSelected }) {
  // console.log(data)
  const [selectedItems, setSelectedItems] = useState(
    getDefaultValue() ?? data.map((d) => d.id),
  )
  function getDefaultValue() {
    if (currentSelected) {
      const arraySelected = currentSelected.split('-').map((item) => {
        return !isNaN(item) ? Number(item) : item
      })
      return arraySelected
    }
  }

  const handleChange = (e) => {
    let choosen = [...selectedItems]

    if (e.target.checked) choosen.push(e.target.value)
    else choosen = choosen.filter((item) => item != e.target.value)

    setSelectedItems(choosen)

    return onChange(choosen.join('-'))
  }

  return (
    <ul>
      {data.map((item, i) => {
        return (
          <li key={item.id} className="gap-2 mb-1 flex-start">
            <input
              type="checkbox"
              id={item.id + item.name}
              name="item"
              value={item.id}
              onChange={handleChange}
              checked={selectedItems.some((n) => n == item.id)}
              className="rounded-md cursor-pointer checked:bg-green-500 checked:dark:bg-green-500 "
            />
            <label htmlFor={item.id + item.name} className="cursor-pointer">
              {item.name}
            </label>
          </li>
        )
      })}
    </ul>
  )
}
