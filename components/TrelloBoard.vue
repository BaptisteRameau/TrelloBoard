<template>
    <div>
        <div v-for="column in columns" :key="column.id">
            <header>
                {{ column.title }}
            </header>
            <p v-for="task in column.tasks" :key="task.id">
                {{ task.title }}
            </p>
        </div>
</div>
</template>

<script setup lang="ts">
import type { Column } from '../types';
import { nanoid } from 'nanoid';

const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: 'Backlog',
        tasks: [
            {
                id: nanoid(),
                title: 'Create marketing landing page',
                created_at: new Date()
            },
            {
                id: nanoid(),
                title: 'Develop cool new feature',
                created_at: new Date()
            },
            { id: nanoid(), title: 'Fix page nav bug', created_at: new Date() }
        ]
    },
    { id: nanoid(), title: 'Selected for Dev', tasks: [] },
    { id: nanoid(), title: 'In Progress', tasks: [] },
    { id: nanoid(), title: 'QA', tasks: [] },
    { id: nanoid(), title: 'Complete', tasks: [] },
])
</script>