'use client';

import { AddTodo } from '@/app/todos/components/addtodo/AddTodo';
import { Controls } from '@/app/todos/components/controls/Controls';
import { ErrorBoundary } from '@/app/todos/components/errorboundary/ErrorBoundary';
import { Header } from '@/app/todos/components/header/Header';
import { useControlsStore } from '@/app/todos/stores/controls/controlsStore';
import classes from './App.module.scss';
import { TodosList } from './components/todos/TodosList';
import { TodosTable } from './components/todos/TodosTable';

export default function TodosPage() {
  const theme = useControlsStore((store) => store.theme);
  const viewType = useControlsStore((store) => store.viewType);

  return (
    <main className={classes.main}>
      <Header />
      <Controls />
      <ErrorBoundary>
        {viewType === 'list' ? <TodosList /> : <TodosTable />}
        <AddTodo />
      </ErrorBoundary>
    </main>
  );
}
