async function repeatTask() {
    let count = 0;
  
    while (count < 5) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate async task
      console.log(`Task executed ${count + 1}`);
      count++;
    }
  
    console.log("Task finished");
  }
  
  repeatTask();
  