import atexit
import argparse
from .resources.local import start_server

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Start MariTalk Local server.")
    parser.add_argument(
        "--license",
        type=str,
        required=True,
        help="License key for downloading the model.",
    )
    parser.add_argument(
        "--path", type=str, default="~/bin/maritalk", help="Path for the executable."
    )
    parser.add_argument(
        "--cuda",
        type=int,
        choices=[11, 12],
        default=None,
        help="Installed CUDA version.",
    )
    parser.add_argument("--port", type=int, default=9000, help="The HTTP port to bind.")
    args = parser.parse_args()

    process = start_server(args.license, args.path, args.cuda, args.port)
    atexit.register(lambda: process.terminate())

    while True:
        output = process.stdout.readline()
        if process.poll() is not None and output == b"":
            break
        if output:
            print(output.decode().strip())
