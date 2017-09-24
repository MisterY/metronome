/**
 * https://github.com/facebookincubator/create-react-app/issues/1574#issuecomment-280436498
 */
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}