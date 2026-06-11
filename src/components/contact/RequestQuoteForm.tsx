export default function RequestQuoteForm() {
  return (
    <section className="section-padding">

      <div className="container-custom max-w-5xl">

        <h2 className="text-5xl font-bold mb-4">
          Get a Personalized Quotation
        </h2>

        <p className="text-lg text-neutral-600 mb-12">
          Share your project requirements and our team
          will provide a customized quotation tailored
          to your needs.
        </p>

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Product Category
              </label>

              <select
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              >
                <option>Doors</option>
                <option>Windows</option>
                <option>Frames</option>
              </select>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Estimated Quantity
              </label>

              <input
                type="number"
                placeholder="Enter quantity"
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Project Type
              </label>

              <select
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-black
                "
              >
                <option>Residential</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>

            </div>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Project Location
            </label>

            <input
              type="text"
              placeholder="Enter project location"
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-black
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Additional Notes
            </label>

            <textarea
              rows={6}
              placeholder="Share any specific requirements, dimensions, finishes, or project details..."
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-black
              "
            />

          </div>

          <button
            type="submit"
            className="
              px-4
              py-4
              bg-black
              text-white
              rounded-full
              hover:opacity-90
              transition
            "
          >
            Request Quote
          </button>

        </form>

      </div>

    </section>
  );
}