export default function guardrail(mathFunction) {
  const queue = [];
  const math1 = new Promise((resolve, reject) => {
    resolve(() => { mathFunction(); });
    reject(Error());
  });

  return math1.then((value) => { queue.push(value); })
    .catch((error) => { queue.push(console.error(error)); })
    .finally(() => { queue.push('Guardrail was processed'); });
}
