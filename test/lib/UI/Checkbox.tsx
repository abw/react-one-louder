export type CheckboxProps = {
  text: string
  checked?: boolean
}

export const Checkbox = ({ text, checked=false }: CheckboxProps) =>
  <label>
    <input type="checkbox" checked={checked}/>
    { text }
  </label>

export default Checkbox