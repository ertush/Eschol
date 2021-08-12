
function Card({content}) {
    return (
        <div class="md:flex md:h-full md:p-20 md:flex-col md:justify-center">
          <div class="md:relative md:py-3">
            <div class=" md:absolute md:inset-0 md:bg-gradient-to-r md:from-primary md:to-secondary-accent md:shadow-lg md:transform -skew-y-6 sm:skew-y-0 -rotate-6 md:rounded-3xl"></div>
            <div class="shadow-none md:relative md:px-4 md:py-10 md:bg-gray-100 md:shadow-lg md:rounded-3xl md:p-20">
              <div class="mx-auto">
                {content}
              </div>
            </div>
          </div>
        </div>
    )
}


export default Card