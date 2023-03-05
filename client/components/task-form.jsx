import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
export default function TaskForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [task, setTask] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const newTodo = {
      task,
      isCompleted: false
    };
    onSubmit(newTodo);
    setTask('');
  }

  function handleClick() {
    setShowTaskForm(!showTaskForm);
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        <button
          onClick={handleClick}
          className='rounded border w-full px-4 py-2 border-[#C8F2DE] bg-[#C8F2DE] hover:bg-[#4bffa8] hover:border-[#4bffa8] transition-colors duration-300'
        >{showTaskForm ? 'Hide Task Form' : 'Create a New Task'}
        </button>
      </div>
      <div className={`overflow-hidden ${showTaskForm ? 'test3 max-h-60' : 'test3 max-h-0 text-transparent'}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-2'>
            <label className='pl-2'>
              <span className='text-lg font-medium'>Task</span>
              <div>
                <input type='text' className='pl-2 w-full mx-auto rounded-md  shadow-sm py-2 px-3 border border-[#f2dec8] placeholder-gray-400 focus:outline-none focus:ring-[#C8F2DE] focus:border-[#C8F2DE]' placeholder='Contact vendors about food options' {...register('task', {
                  required: 'Task is required.',
                  minLength: {
                    value: 1,
                    message: 'Task name cannot be shorter than 1 characters'
                  },
                  maxLength: {
                    value: 25,
                    message: 'Task name cannot be longer than 25 characters'
                  }
                })} />
              </div>
              <div>
                <p>{errors?.taskName?.message}</p>
              </div>
            </label>
          </div>
          <div className='my-2'>
            <button
              className='rounded border px-4 py-2 border-[#C8F2DE] bg-[#C8F2DE] hover:bg-[#4bffa8] hover:border-[#4bffa8] transition-colors duration-300'
              type="submit"
              value='Create Event'>
              Add Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
