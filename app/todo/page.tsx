import { createClient } from '@lib/supabase/server';

export default async function Tasks() {
  const supabase = await createClient();
  const { data: todos } = await supabase.from("todos").select();

  return <pre>{JSON.stringify(todos, null, 2)}</pre>
}