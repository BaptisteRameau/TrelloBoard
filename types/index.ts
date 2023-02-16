type ID = string;

interface Column {
  id: ID;
  title: string;
  tasks: Task[];
}

interface Task {
  id: ID;
  title: string;
  created_at: Date;
}

export { ID, Column, Task };
