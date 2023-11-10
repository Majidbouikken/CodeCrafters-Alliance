async function init() {
    // Get the canvas element
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
  
    // Create a WebGPU adapter
    const adapter = await navigator.gpu.requestAdapter();
  
    // Create a WebGPU device
    const device = await adapter.requestDevice();
  
    // Create a WebGPU context
    const context = canvas.getContext('gpupresent');
  
    // Your WebGPU code goes here
  
    // Example: Clear the screen
    const commandEncoder = device.createCommandEncoder();
    const passEncoder = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: context.getCurrentTexture().createView(),
        loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        storeOp: 'store',
      }],
    });
    passEncoder.endPass();
    device.queue.submit([commandEncoder.finish()]);
  }
  
  // Call the init function
  init();
  