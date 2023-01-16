export class Animator {
  // 需要提前声明值，默认为public
  public duration: number
  public update: Function
  public cancel: (() => void) | undefined

  constructor(duration: number, update: Function) {
    this.duration = duration
    this.update = update
  }

  animate() {
    let startTime = 0,
      duration = this.duration,
      update = this.update,
      self = this

    return new Promise((res, rej) => {
      /**
       * action index
       */
      let qid = 0

      /**
       * 回调函数被触发的时间
       * timestamp is requestAnimationFrame's callback param, btw, the Performance.now()'s accuracy is higher than Date.now(), u can check the param by changing its callback function on prototype for higher accuracy
       * @param timestamp
       */
      function step(timestamp: number) {
        startTime = startTime || timestamp
        let t = Math.min(1.0, (timestamp - startTime) / duration)
        console.log('\t\t timestamp: ', timestamp, '\t qid', qid, '\t\t timeCheck: ', startTime, timestamp)
        update.call(self, t)

        if (t < 1.0) {
          qid = requestAnimationFrame(step)
        } else {
          res(startTime + duration)
        }
      }

      self.cancel = function () {
        cancelAnimationFrame(qid)
        update.call(self, 0)
        rej(startTime + duration)
      }

      qid = requestAnimationFrame(step)
    })
  }
}
