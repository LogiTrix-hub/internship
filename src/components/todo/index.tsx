import { Button } from "antd"

export const ToDo = () => {
  return (
    <div>
      <Button type="primary">Add task</Button>
      <Button type="primary" danger>Remove task</Button>
    </div>
  )
}