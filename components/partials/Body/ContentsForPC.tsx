import React, { useRef, useEffect } from 'react'
import CommonContents from '../../common/CommonContents'

const ContentsForPC: React.FC = () => {
  // scroll easing
  const mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  const mount = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    mount.current?.addEventListener(mousewheelevent, (e) => {
      e.preventDefault()
    })
    let targetHeight = mount.current?.getBoundingClientRect().height
    let scrollAmount = 0
    mount.current?.addEventListener(mousewheelevent, (e: any) => {
      targetHeight = mount.current?.getBoundingClientRect().height
      scrollAmount += e.deltaY * -1
      if (targetHeight === undefined) return
      scrollAmount = Math.max(-1 * (targetHeight - window.innerHeight), scrollAmount)
      scrollAmount = Math.min(0, scrollAmount)
    })
    let y = 0
    const scrollContent = () => {
      requestAnimationFrame(scrollContent)
      if (targetHeight === undefined) return
      scrollAmount = Math.max(-1 * (targetHeight - window.innerHeight), scrollAmount)
      y += (scrollAmount - y) * 0.08, -0.1 < y && (y = 0)

      let transform = 'translateY(' + y + 'px) translateZ(0)'
      let style = mount.current?.style
      if (style === undefined) return
      style.transform = transform
      style.webkitTransform = transform
    }
    scrollContent()
  }, [])
  return (
    <div ref={mount}>
      <CommonContents />
    </div>
  )
}

export default ContentsForPC;