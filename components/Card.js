
function Card({content, bgCardStyle, cardStyle}) {
    return (
        <div class="md:flex md:h-full md:p-20 md:flex-col md:justify-center">
          <div class="md:relative md:py-3">
            <div class={bgCardStyle?.concat(" md:absolute md:inset-0  md:shadow-lg md:transform sm:skew-y-0 md:rounded-3xl")}></div>
            <div class={cardStyle?.concat(" shadow-none md:relative md:px-4 md:py-10  md:rounded-3xl md:p-20")}>
              <div class="mx-auto">
                {content}
              </div>
            </div>
          </div>
        </div>
    )
}


export default Card