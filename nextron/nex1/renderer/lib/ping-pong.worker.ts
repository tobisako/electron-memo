//! To avoid isolatedModules error 
//export default {};

const ctx: Worker = self as any

ctx.addEventListener('message', () => {
  console.log("ワーカーの中");
  ctx.postMessage('pong');
});

export default ctx
