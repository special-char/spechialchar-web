import { ImageResponse } from "next/og";

export const size = {
  width: 500,
  height: 500,
};
export const contentType = "image/png";
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          //   src="https://yogateria.com.br/wp-content/uploads/2022/02/logo-yogateria-preto.png"
          src="/images/21fox.png"
          alt="Yogateria"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
