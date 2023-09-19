export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];

  try {
    const val = mathFunction();

    queue.unshift(val);
  } catch (e) {
    queue.unshift(`Error: ${e.message}`);
  }
  return queue;
}
