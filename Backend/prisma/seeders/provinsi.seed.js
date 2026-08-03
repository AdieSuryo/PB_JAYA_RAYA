export async function seedProvinsi(prisma) {

    const provinsi = [

        ["PRV001","Aceh"],
        ["PRV002","Sumatera Utara"],
        ["PRV003","Sumatera Barat"],
        ["PRV004","Riau"],
        ["PRV005","Kepulauan Riau"],
        ["PRV006","Jambi"],
        ["PRV007","Sumatera Selatan"],
        ["PRV008","Kepulauan Bangka Belitung"],
        ["PRV009","Bengkulu"],
        ["PRV010","Lampung"],
        ["PRV011","DKI Jakarta"],
        ["PRV012","Jawa Barat"],
        ["PRV013","Jawa Tengah"],
        ["PRV014","DI Yogyakarta"],
        ["PRV015","Jawa Timur"],
        ["PRV016","Banten"],
        ["PRV017","Bali"],
        ["PRV018","Nusa Tenggara Barat"],
        ["PRV019","Nusa Tenggara Timur"],
        ["PRV020","Kalimantan Barat"],
        ["PRV021","Kalimantan Tengah"],
        ["PRV022","Kalimantan Selatan"],
        ["PRV023","Kalimantan Timur"],
        ["PRV024","Kalimantan Utara"],
        ["PRV025","Sulawesi Utara"],
        ["PRV026","Gorontalo"],
        ["PRV027","Sulawesi Tengah"],
        ["PRV028","Sulawesi Barat"],
        ["PRV029","Sulawesi Selatan"],
        ["PRV030","Sulawesi Tenggara"],
        ["PRV031","Maluku"],
        ["PRV032","Maluku Utara"],
        ["PRV033","Papua"],
        ["PRV034","Papua Barat"],
        ["PRV035","Papua Selatan"],
        ["PRV036","Papua Tengah"],
        ["PRV037","Papua Pegunungan"],
        ["PRV038","Papua Barat Daya"]

    ];

    for (const item of provinsi) {

        const [uid_provinsi, nama_provinsi] = item;

        await prisma.mProvinsi.upsert({

            where: {
                uid_provinsi
            },

            update: {},

            create: {

                uid_provinsi,
                nama_provinsi,

                created_by_uid: "USR001",
                updated_by_uid: "USR001"

            }

        });

    }

    console.log("✔ 38 Provinsi berhasil dibuat.");

}