
export const styles = {

    container: {
        overlay: "fixed top-0 left-0 w-full h-screen bg-[hsla(0,0%,0%,0.5)] opacity-0 pointer-events-none z-15 transition duration-[0.5s] ease",
        active: "opacity-[1] pointer-events-auto",

    },

    modal: {
        main: "fixed top-0 left-0 w-full h-screen bg-[hsla(0,0%,0%,0.5) flex items-center justify-center z-10 animate-popup duration-[1s] ease-in-out duration-[0.5s] forwards pointer-events-none",
        visibility: "opacity-0 pointer-events-none invisible",
        closed: "hidden",
        content: "relative max-w-[350px] m-4 bg-white rounded-radius-md overflow-hidden z-2",
        button: "absolute top-2 right-2 text-white text-md p-2 rounded-radius-sm w-8 h-8 flex items-center justify-center font-bold",
        newsletter: {
            button: {
                style: "bg-eerie-black text-white text-fs-7 font-weight-600 rounded-radius-sm py-[10px] px-[15px] m-auto transition duration-300",
                hover: "hover:bg-salmon-pink hover:text-white"
            }
        }
    }


}