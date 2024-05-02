import os
import argparse
from .resources.local import download, check_gpu, find_libs

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Download MariTalk Local server.")
    parser.add_argument(
        "--license",
        type=str,
        required=True,
        help="License key for downloading the model.",
    )
    parser.add_argument(
        "--path",
        type=str,
        default="~/bin/maritalk",
        help="Path to save the executable.",
    )
    parser.add_argument(
        "--cuda",
        type=int,
        choices=[11, 12],
        default=None,
        help="Installed CUDA version.",
    )
    args = parser.parse_args()

    if not args.cuda:
        check_gpu()
    detected_versions = find_libs()

    dependencies = {"cuda_version": args.cuda or detected_versions["cuda_version"]}

    if dependencies["cuda_version"] is None:
        raise Exception(
            "No libcublas.so found. cuBLAS v11 or v12 is required to run MariTalk. You can manually set the version using the `cuda_version` argument."
        )

    args.path = os.path.expanduser(args.path)
    bin_folder = os.path.dirname(args.path)
    if bin_folder:
        os.makedirs(bin_folder, exist_ok=True)
    download(args.license, args.path, dependencies)
